import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This item is from context 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This item is from context 3",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id =
      feedback.length > 0 ? feedback[feedback.length - 1].id + 1 : 0;
    setFeedback([...feedback, newFeedback]);
  };

  //update Feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
    //for each feedback we check if current id is same as id that we have passed in for making an update
    //if so then we want to spread item and updated item if not, we return item as it was
  };
  //Set item to be updated
  const editFeedbackItem = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedbackItem,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
