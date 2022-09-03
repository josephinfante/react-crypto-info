import moment from "moment";

const Dateformatter = (date: number, type: string) => {
  let result =
    type === "date"
      ? moment(date).locale("es").format("DD MMM YYYY")
      : type === "time"
      ? moment(date).locale("es").format("hh:mm a")
      : null;
  return result;
};

export default Dateformatter;
