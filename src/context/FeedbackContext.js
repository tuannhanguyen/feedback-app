import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  }, []);

  useEffect(() => {
    fetchFeedback()
  })

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure want to delete ?")) {
        await fetch(`/feedback/${id}`, {method: 'DELETE'})
        setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateItem)
    })

    const data = response.json()
    setFeedback(feedback.map((item) => {
        return item.id === id ? { ...item, ...data } : item
    }))
  }

  return (
    <FeedbackContext.Provider
      value={{
        
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
