import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  const handleAddTodo = () => {
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const handleTodoDelete = (id) => {
    const updateTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(updateTodo);
  };

  const handleEditTodo = (id) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}
        >
          {item.title}
        </Text>

        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleTodoDelete(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          paddingVertical: 14,
          marginVertical: 40,
          alignItems: "center",
        }}
        onPress={() => handleAddTodo()}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          Add
        </Text>
      </TouchableOpacity>

      {editedTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 14,
            marginVertical: 40,
            alignItems: "center",
          }}
          onPress={() => handleAddTodo()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 14,
            marginVertical: 40,
            alignItems: "center",
          }}
          onPress={() => handleUpdate()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Add
          </Text>
        </TouchableOpacity>
      )}

      <FlatList data={todoList} renderItem={renderTodos} />
      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;
