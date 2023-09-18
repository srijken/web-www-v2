const ref = React.useRef < HTMLDivElement > null;
let count = React.Children.count(children);

React.useEffect(() => {
  if (ref.current) {
    let el: HTMLElement = ref.current.querySelector(`:nth-child(${page - 1})`);
    if (el) {
      let left = el.offsetLeft;
      ref.current.scrollTo({ left, behavior: "smooth" });
    } else {
      console.log("No element found");
    }
  }
}, [page, count]);

const nextPage = () => {
  if (page < count) {
    setPage(page + 1);
  } else {
    setPage(1);
  }
};

const prevPage = () => {
  if (page > 1) {
    setPage(page - 1);
  } else {
    setPage(count);
  }
};
