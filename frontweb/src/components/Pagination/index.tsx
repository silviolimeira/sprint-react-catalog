import { Button } from "react-bootstrap";
import "./styles.css";

function Pagination() {
  return (
    <div className="pages-component">
      <div>
        <Button className="pages-component-pn-lastfirst" variant="primary">
          &lt;
        </Button>
      </div>
      <div>
        <Button
          className="pages-component-item-active pages-component-pn"
          variant="primary"
        >
          1
        </Button>
      </div>
      <div>
        <Button
          className="pages-component-item pages-component-pn"
          variant="primary"
        >
          2
        </Button>
      </div>
      <div className="pages-component-next"></div>
      <div>
        <Button
          className="pages-component-pn-lastfirst pages-component-pn-active"
          variant="primary"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
