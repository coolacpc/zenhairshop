import React from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { Avatar, Typography } from "@material-ui/core";

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
    img: {
      height: 25,
      width: 30,
    },
    selectItem: {
      marginLeft: 8,
      color: "white",
    },
    selectItem2: {
      marginLeft: 8,
      color: "black",
    },
    itemView: {
      backgroundColor: theme.palette.primary.main,
    },
    icon: {
      color: theme.palette.textColor.main,
    },
    selected: {
      backgroundColor: "red",
    },
  })
);

export default function CustomizedSelects(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  React.useEffect(() => {
    if (
      props.currentUserCountry === "JOD" ||
      props.currentUserCountry === "SAR" ||
      props.currentUserCountry === "USD" ||
      props.currentUserCountry === "QAR" ||
      props.currentUserCountry === "KWD"
    ) {
      setAge(props.currentUserCountry);
    } else {
      setAge(props.options[0].title);
    }
  }, [props.currentUserCountry, props.options]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
          id="demo-customized-select"
          labelId="demo-customized-select-label"
          classes={{
            icon: classes.icon,
            outlined: classes.filled,
          }}
        >
          {props.options.map((option) => (
            <MenuItem
              value={option.title}
              className={classes.itemView}
              classes={{
                selected: classes.selected,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Avatar
                  variant="square"
                  src={option.img}
                  className={classes.img}
                />
                <Typography
                  className={
                    props.drawerOpen ? classes.selectItem2 : classes.selectItem
                  }
                >
                  {option.title}
                </Typography>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
