const RequestDetails = ({ record }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container spacing={2}>
      <Grid
        container
        backgroundColor="#f6f6f6"
        spacing={2}
        borderRadius={5}
        marginLeft={2}
        marginTop={5}
        padding={2}
      >
        {Object.keys(headerToVariable).map((item, i) => {
          if (item.startsWith("rCR")) return null;

          return (
            <Grid key={i} item xs={6}>
              <Item style={{ color: "black", fontWeight: 600 }}>
                <div style={{ color: "#BDBDBD" }}>
                  {headerToVariable[item] ? headerToVariable[item] : item} :
                </div>{" "}
                <br />
                {item === "amount" ? Amount(record[item]) : record[item]}
              </Item>
            </Grid>
          );
        })}
      </Grid>

      <Grid
        borderRadius={5}
        container
        backgroundColor="#f5f5f5"
        spacing={2}
        marginLeft={2}
        marginTop={5}
        padding={2}
      >
        <Grid key={"fg"} item xs={12}>
          Status
        </Grid>
        {Object.keys(headerToVariable).map((item, i) => {
          if (!item.startsWith("rCR")) return null;

          return (
            <Grid key={i} item xs={4}>
              <Item style={{ color: "black", fontWeight: 600 }}>
                <div style={{ color: "#BDBDBD" }}>
                  {headerToVariable[item] ? headerToVariable[item] : item} :
                </div>{" "}
                <br />
                {item === "amount" ? Amount(record[item]) : record[item]}
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
