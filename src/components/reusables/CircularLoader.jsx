import { Box, CircularProgress } from "@mui/material";

export function CircularLoader(props) {
  return (
    <Box
      sx={{ width: '100%', py: 3, display: 'flex', justifyContent: 'center' }}
    >
      <CircularProgress {...props} />
    </Box>
  )
}
