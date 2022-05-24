import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  container: {
    minWidth: "275px",
    maxHeight: "70vh",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
  header: {
    backgroundColor: "#F25E7A",
    color: "white",
    textAlign: "center",
  },
  avatar: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  iconButton: { position: "relative" },
  input: {
    display: "none",
  },
  large: {
    width: "200px !important",
    height: "200px !important",
  },
  dataContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    // backgroundColor: theme.palette.grey[200],
    marginBottom: "1rem",
    // boxShadow: theme.shadows[5],
    borderRadius: "2px",
  },
  editButton: {
    marginLeft: "2rem",
  },
  buttonBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: "40px",
  },
});
