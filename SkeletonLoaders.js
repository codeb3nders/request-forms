function SkeletonLoaders() {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation="wave" />
    </Box>
  );
}
