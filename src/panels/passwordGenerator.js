import React, { useState } from "react";
import { Panel, PanelHeader, Header, Group, SimpleCell } from "@vkontakte/vkui";

const generatePassword = (length) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length);
    setPassword(newPassword);
  };

  return (
    <Panel id="home">
      <PanelHeader>Генератор паролей</PanelHeader>
      <Group header={<Header mode="secondary">Настройки</Header>}>
        <SimpleCell
          description="Length"
          after={
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          }
        >
          Кол-во символов
        </SimpleCell>
      </Group>
      <Group header={<Header mode="secondary">Генерация</Header>}>
        <SimpleCell onClick={handleGeneratePassword}>Сгенерировать</SimpleCell>
      </Group>
      <Group header={<Header mode="secondary">Ваш пароль</Header>}>
        <SimpleCell>{password || "Пароль еще не сгенерирован"}</SimpleCell>
      </Group>
    </Panel>
  );
};

export default PasswordGenerator;
