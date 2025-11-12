export const init = (form, handleTodoCreation) => {
  form.addEventListener("submit", handleTodoCreation);
};

export const resetForm = (fields) => {
  fields.forEach((field) => {
    if (field.tagName === "SELECT") {
      //Sets the priority field to the first option
      field.selectedIndex = 0;
    } else {
      field.value = "";
    }
  });
};

export const clearErrorMessages = (errorMessages) => {
  errorMessages.forEach((item) => (item.textContent = ""));
};

export const valueCollector = (...fields) => {
  const [title, details, startDate, dueDate, priority] = fields;
  return {
    titleValue: title.value.trim(),
    detailsValue: details.value.trim(),
    startDateValue: startDate.value,
    dueDateValue: dueDate.value,
    priorityValue: priority.value,
  };
};
