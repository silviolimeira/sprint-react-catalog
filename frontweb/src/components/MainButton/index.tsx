import "./styles.css";

type Props = {
  key: string;
  title: string;
};

function MainButton({ title }: Props): JSX.Element {
  return (
    <div className="component-main-button">
      <button
        type="button"
        className="btn btn-primary component-main-button-b1"
      >
        &gt;
      </button>
      <button
        type="button"
        className="btn btn-primary component-main-button-b2"
      >
        {title}
      </button>
    </div>
  );
}

export default MainButton;
