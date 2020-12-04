const messages = new Map();

module.exports.createMessage = (req, res) => {
  const { body } = req;

  const newMessage = {
    id: (messages.size + 1).toString(),
    ...body,
    date: Date(),
  };
  messages.set(newMessage.id, newMessage);
  res.status(201).send(newMessage);
};

module.exports.getMessage = (req, res) => {
  req.query.postID
    ? res.status(201).send(messages.get(req.query.postID))
    : res.status(201).send(Object.fromEntries(messages));
};

module.exports.updateMessage = (req, res) => {
  const {
    body,
    query: { postID },
  } = req;
  const messageLink = messages.get(postID);
  const preparedMessage = { ...messageLink };
  delete preparedMessage.message;
  delete preparedMessage.update;
  messages.set(postID, {
    ...preparedMessage,
    ...body,
    update: Date().toString(),
  });
  res.status(201).send(messages.get(postID));
};

module.exports.deleteMessage = (req, res) => {
  const {
    query: { postID },
  } = req;
  const messageLink = messages.get(postID);
  const preparedMessage = { ...messageLink };
  messages.delete(postID);
  res.status(201).send(preparedMessage);
};
