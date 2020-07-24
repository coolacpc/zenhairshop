import React from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    selectItem: {
      marginLeft: 8,
      color: "white",
    },
    itemView: {
      backgroundColor: "white",
    },
    icon: {
      color: theme.palette.textColor.main,
    },
    selected: {
      backgroundColor: theme.palette.textColor.main,
    },
  })
);

export default function CustomizedSelects(props) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(
    props.options.length ? props.options[0] : ""
  );
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const pushHistoryFun = (val) => {
    history.push(`${val}`);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          value={value}
          onChange={handleChange}
          input={<BootstrapInput />}
          style={{ color: "white" }}
          id="demo-customized-select"
          labelId="demo-customized-select-label"
          classes={{ icon: classes.icon, outlined: classes.filled }}
        >
          {props.options.map((option) => (
            <MenuItem
              value={option}
              onClick={() => pushHistoryFun(option)}
              className={classes.itemView}
              classes={{ selected: classes.selected }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
