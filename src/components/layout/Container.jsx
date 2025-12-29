
function Container(props) {
  return (
    <div className={`container mx-auto px-4 md:px-6 ${props.customClass}`}>
      {props.children}
    </div>
  );
}

export default Container;
