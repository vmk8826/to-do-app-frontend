export const inputStyle = {
  width: "95%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

export const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
};

export const taskContainerStyle = {
  backgroundColor: "white",
  borderRadius: "6px",
  padding: "12px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  marginBottom: "8px",
  transition: "all 0.2s ease",
  border: "1px solid #e9ecef",
};

export const taskHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
};

export const taskTitleRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

export const taskTitleStyle = {
  fontSize: "1rem",
  fontWeight: "500",
  color: "#212529",
  wordBreak: "break-word",
  marginRight: "8px",
};

export const statusIndicatorStyle = {
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  flexShrink: 0,
};

export const taskDescriptionStyle = {
  fontSize: "0.9rem",
  color: "#6c757d",
  marginTop: "4px",
  marginLeft: "26px",
  wordBreak: "break-word",
};

export const buttonStyleTask = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#6c757d",
  fontSize: "0.85rem",
  padding: "4px 8px",
  borderRadius: "4px",
  transition: "all 0.2s ease",
};

export const addButtonStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: "#4285F4",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  border: "none",
  transition: "all 0.2s ease",
  marginRight: "10px",
};

export const taskListContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "280px",
  maxWidth: "100%",
  border: "none",
  borderRadius: "8px",
  padding: "16px",
  margin: "10px",
  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f8f9fa",
};

export const taskListHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px",
  paddingBottom: "10px",
  borderBottom: "1px solid #e9ecef",
};

export const taskListTitleStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#212529",
};

export const deleteButtonStyle = {
  color: "#dc3545",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  padding: "0 8px",
  transition: "color 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const taskCountStyle = {
  fontSize: "0.85rem",
  color: "#6c757d",
  fontWeight: "500",
  backgroundColor: "#e9ecef",
  padding: "2px 8px",
  borderRadius: "12px",
};

export const addTaskRowStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "8px 0",
  marginBottom: "10px",
};

export const tasksContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  maxHeight: "400px",
  overflowY: "auto",
  padding: "5px 0",
};

export const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

export const modalContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "500px",
  width: "90%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

export const modalHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

export const closeButtonStyle = {
  background: "none",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
};

export const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
    width: "100%",
    backgroundColor: "#1c427c",
    color: "white",
    padding: "0 20px",
    boxSizing: "border-box",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  headerTitle: {
    fontSize: "24px",
    margin: 0,
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#3498db",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  addButton: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#3498db",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    border: "none",
    transition: "transform 0.2s ease, background-color 0.3s ease",
  },
  taskListContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    overflow: "auto",
    boxSizing: "border-box",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "18px",
  },
};

export const inputStyleLogin = {
  margin: "10px 0",
  padding: "12px 15px",
  width: "300px",
  border: "1px solid #ffffff",
  color: "#ffffff",
  outline: "none",
  backgroundColor: "#1c427c",
  fontSize: "16px",
  boxSizing: "border-box",
};

export const buttonStyleLogin = {
  margin: "20px 0",
  padding: "12px 20px",
  width: "300px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#3498db",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

export const inputContainerStyle = {
  position: "relative",
  width: "300px",
  margin: "15px 0",
};

export const labelStyle = {
  position: "absolute",
  top: "-10px",
  left: "20px",
  padding: "0 5px",
  backgroundColor: "#1c427c",
  color: "white",
  fontSize: "14px",
};

export const linkStyle = {
  color: "#3498db",
  textDecoration: "none",
  margin: "10px 0",
  cursor: "pointer",
};

export const inputStyleSignup = {
  margin: "10px 0",
  padding: "12px 15px",
  width: "300px",
  border: "1px solid #ffffff",
  color: "#ffffff",
  outline: "none",
  backgroundColor: "#1c427c",
  fontSize: "16px",
  boxSizing: "border-box",
};

export const buttonStyleSignup = {
  margin: "20px 0",
  padding: "12px 20px",
  width: "300px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#3498db",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

export const inputContainerStyleSignup = {
  position: "relative",
  width: "300px",
  margin: "15px 0",
};

export const labelStyleSignup = {
  position: "absolute",
  top: "-10px",
  left: "20px",
  padding: "0 5px",
  backgroundColor: "#1c427c",
  color: "white",
  fontSize: "14px",
};

export const linkStyleSignup = {
  color: "#3498db",
  textDecoration: "none",
  margin: "10px 0",
  cursor: "pointer",
};
