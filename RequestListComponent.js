function RequestListComponent() {
  const context = useContext(ApplicationContext);
  const {
    state,
    modalState,
    setModalState,
    data,
    setData,
    rCR01FormFields,
    setRcr01FormFields,
  } = context;

  const { user, request, isLoading } = state;

  const userOnly = request.filter(
    (row) => row.submittedBy === user["Employee Company Email"]
  );

  const rows = setAllowedAccess(state.user, [
    APPROVER_QS,
    APPROVER_ACTG,
    TREASURY,
    VIEW_ONLY,
    PROCUREMENT,
    APPROVER_SHE,
    HR_ADMIN,
  ])
    ? request
    : userOnly;

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headerLabels = {
    // "Date Submitted": "Date Submitted",
    submittedBy: "Submitted By",
    referenceNo: "Reference No",
    project: "Project",
    category: "Category",
    rCR02Status: "RCR02 Status",
    rCR03Status: "RCR03 Status",
    rCR04Status: "RCR04 Status",
    amount: "Amount",
  };

  const headCells = Object.keys(headerLabels).map((cells, index) => {
    return {
      id: cells,
      numeric: false,
      disablePadding: true,
      label: headerLabels[cells],
    };
  });

  function EnhancedTableHead(props) {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell
            style={{
              // paddingLeft: 15,
              textTransform: "uppercase",
              width: 50,
              background: "#556cd6",
              color: "white",
              border: "1px solid",
            }}
          >
            Actions
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              style={{
                textTransform: "uppercase",
                paddingLeft: 15,
                width: 100,
                background: "#556cd6",
                color: "white",
                border: "1px solid",
              }}
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedRecord, setSelectedRecord] = useState();

  const showDetails = (record) => {
    setSelectedRecord((prev) => ({
      ...prev,
      ...record,
    }));
    setModalState({ detailModal: true });
  };

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    const rows = state.request;
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const updateForm = (row, stage) => {
    const systemName = user.systemName.map((x) => x).join(", ");
    const systemCode = user.systemCode.map((x) => x).join(", ");
    let withDivider = false;
    let message = `Request for ${systemName} | ${systemCode} `;
    const cancelLabel = "Cancel";
    let submitLabel = "Submit";
    setRcr01FormFields((prev) => {
      Object.keys(prev).map((item) => {
        if (
          !prev[item].id.startsWith("rCR") &&
          !setAllowedAccess(state.user, [REQUESTOR])
        ) {
          prev[item].disabled = true;
        }
      });
      if (stage === 1) {
        withDivider = true;
        submitLabel = "Approve";
        // message = "QS: Approve request in ";

        Object.assign(prev, rCR02FormFields);
        for (var key in prev) if (key.startsWith("rCR03")) delete prev[key];
        for (var key in prev) if (key.startsWith("rCR04")) delete prev[key];
      }

      if (stage === 2) {
        withDivider = true;
        submitLabel = "Approve";
        // message = "Accounting: Approve request in ";

        Object.assign(prev, rCR03FormFields);
        for (var key in prev) if (key.startsWith("rCR02")) delete prev[key];
        for (var key in prev) if (key.startsWith("rCR04")) delete prev[key];
      }

      if (stage === 3) {
        withDivider = true;
        submitLabel = "Submit";
        // message = "Treasury: Approve request in ";

        Object.assign(prev, rCR04FormFields);
        for (var key in prev) if (key.startsWith("rCR03")) delete prev[key];
        for (var key in prev) if (key.startsWith("rCR02")) delete prev[key];
      }

      if (stage === 0) {
        Object.assign(prev, rCR04FormFields);
        for (var key in prev) if (key.startsWith("rCR03")) delete prev[key];
        for (var key in prev) if (key.startsWith("rCR02")) delete prev[key];
        for (var key in prev) if (key.startsWith("rCR04")) delete prev[key];
      }

      return {
        ...prev,
      };
    });
    setData((prev) => {
      Object.keys(rCR01FormFields).forEach((item) => {
        rCR01FormFields[item].value = row[item];
      });

      return {
        ...prev,
        referenceNo: { value: row.referenceNo },
        submittedBy: { value: row.submittedBy },
        dateSubmitted: { value: row.dateSubmitted },
      };
    });

    context.setModalState({
      formModal: true,
      detailModal: false,
      title: <TitleValue message={message} refNo={row.referenceNo} />,
      buttonProps: {
        cancelLabel,
        submitLabel,
      },
      withDivider,
      stage,
    });
  };

  const TitleValue = ({ message, refNo }) => {
    return (
      <div
        style={{
          fontSize: 12,
          padding: 5,
          background: "#556cd6",
          color: "white",
        }}
      >
        {message}
        {/* <span> {refNo}</span> */}
      </div>
    );
  };

  const actionButtons = (row) => {
    const rcr02BtnDisabled =
      row.rCR02Status && row.rCR02Status.trim().toLowerCase() === "approved";

    const rcr03BtnDisabled =
      row.rCR03Status && row.rCR03Status.trim().toLowerCase() === "approved";

    const rcr04BtnDisabled =
      row.rCR04Status && row.rCR04Status.trim().toLowerCase() === "approved";

    const btn = (stage) => {
      if (stage === 1) {
        return (
          <Tooltip
            title={!rcr02BtnDisabled ? "To be approve  by QS" : "Approved"}
          >
            <span>
              <IconButton
                disabled={rcr02BtnDisabled}
                color="warning"
                onClick={() => updateForm(row, 1)}
              >
                <span className="material-icons">task_alt</span>
              </IconButton>
            </span>
          </Tooltip>
        );
      } else if (stage === 2) {
        return (
          <Tooltip title={rcr03BtnDisabled ? "Approved" : "Click to Approve"}>
            <span>
              <IconButton
                disabled={!rcr02BtnDisabled || rcr03BtnDisabled}
                color="primary"
                onClick={() => updateForm(row, 2)}
              >
                <span className="material-icons">task_alt</span>
              </IconButton>
            </span>
          </Tooltip>
        );
      } else if (stage === 3) {
        return (
          <Tooltip
            title={
              rcr02BtnDisabled
                ? "To be approve by Treasury/Admin"
                : "Not yet approve"
            }
          >
            <span>
              <IconButton
                disabled={!rcr03BtnDisabled || rcr04BtnDisabled}
                color="success"
                onClick={() => updateForm(row, 3)}
              >
                <span className="material-icons">task_alt</span>
              </IconButton>
            </span>
          </Tooltip>
        );
      } else if (stage === 0) {
        return (
          <Tooltip
            title={
              !rcr02BtnDisabled
                ? "Edit"
                : "Edit not allowed. Either approved or waiting for final approval"
            }
          >
            <span>
              <IconButton
                disabled={rcr02BtnDisabled}
                color="primary"
                onClick={() => updateForm(row, 0)}
              >
                <span className="material-icons">edit</span>
              </IconButton>
            </span>
          </Tooltip>
        );
      }
    };

    //setAllowedAccess(user, [APPROVER_QS])
    //setAllowedAccess(user, [APPROVER_ACTG, HR_ADMIN, TREASURY])

    return (
      <Stack direction="row" spacing={1}>
        <Tooltip title="Show details">
          <IconButton color="primary" onClick={() => showDetails(row)}>
            <span className="material-icons">launch</span>
          </IconButton>
        </Tooltip>
        {setAllowedAccess(user, [REQUESTOR]) && btn(0)}
        {setAllowedAccess(user, [APPROVER_QS]) && btn(1)}
        {setAllowedAccess(user, [APPROVER_ACTG, HR_ADMIN, TREASURY]) && btn(2)}
        {setAllowedAccess(user, [APPROVER_ACTG, HR_ADMIN, TREASURY]) && btn(3)}
      </Stack>
    );
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return isLoading ? (
    <SkeletonLoaders />
  ) : (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid key="ls2" item xs={6} display="flex" justifyContent="flex-start">
          <Tooltip
            title={
              setAllowedAccess(state.user, [REQUESTOR])
                ? "New Request"
                : "For Requestors only"
            }
          >
            <span>
              <Button
                disabled={!setAllowedAccess(state.user, [REQUESTOR])}
                onClick={() =>
                  context.setModalState({ formModal: true, detailModal: false })
                }
              >
                <span className="material-icons">content_paste</span>
              </Button>
            </span>
          </Tooltip>
        </Grid>
        {/* <Grid key="ls1" item xs={6} textAlign="right">
          <Typography variant="caption" display="block">
            {user["Name"]}
          </Typography>
          <Typography variant="overline" display="block">
            {user["System Code"]}
          </Typography>
        </Grid> */}
      </Grid>

      <Paper sx={{ width: "100%", mb: 2 }}>
        <hr />
        <Divider />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row["project"]);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      <TableCell>{actionButtons(row)}</TableCell>
                      {Object.keys(headerLabels).map((item, index) => {
                        if (item === "amount") {
                          return (
                            <TableCell key={"c" + index}>
                              {Amount(row[item])}
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell key={"c" + index}>{row[item]}</TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <DetailModalComponent title="Request Details">
        {selectedRecord ? (
          <RequestDetails user={user} record={selectedRecord} />
        ) : (
          <p>loading...</p>
        )}
      </DetailModalComponent>
    </Box>
  );
}
