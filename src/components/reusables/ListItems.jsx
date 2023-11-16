import { ListSubheader } from "@mui/material";
import React from "react";
import AssignmentIcon from '@mui/icons-material/Assignment'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset className="bg-secondary-color">
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Current month' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItemButton>
  </React.Fragment>
)
