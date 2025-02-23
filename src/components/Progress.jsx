import ProgressBar from 'react-bootstrap/ProgressBar';
import "../styles/Progress.css"

export default function Progress({ fields }) {
  const contTrue = () => fields.filter(Boolean).length;
  return (
    <>
      <ProgressBar className="custom-bar" now={contTrue()*25} label={contTrue()*25 + "%"} />
    </>
  );
}
