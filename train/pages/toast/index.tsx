import { NextPage } from "next";
import { ToastContainer, toast } from "react-toastify";

const ToastPage: NextPage = () => {
  const notify = () => toast("So easy");

  return (
    <section>
      <button onClick={notify}>Notify</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default ToastPage;
