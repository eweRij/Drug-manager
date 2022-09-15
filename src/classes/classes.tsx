import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  container: {
    minWidth: "275px",
    marginBottom: "4rem",
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
    marginBottom: "1rem",
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
  drugList: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  drugCard: {
    height: "350px",
    width: "250px",
    marginBottom: "1rem",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  cardContainer: {
    paddingLeft: "2rem !important",
    paddingRight: "2rem !important",
  },
});
