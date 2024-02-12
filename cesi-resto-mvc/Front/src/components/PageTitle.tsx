import { Box, Container, Typography } from "@mui/material";

export default function PageTitle({ title }: { title: string }) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>
      </Container>
    </Box>
  );
}
