// components/SenderComponent.jsx

import ReceiverComponent from '@/components/ReceiverComponent';

const SenderComponent = () => {
  const dataToSend = {
    message: 'Olá do SenderComponent!',
    value: 42,
  };

  return (
    <div>
      <h2>Sender Component</h2>
      <ReceiverComponent data={dataToSend} />
    </div>
  );
};

export default SenderComponent;
