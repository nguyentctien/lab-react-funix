import BasicForm from './components/BasicForm';

function App() {
  const onSubmit = input => {
    console.log(input);
  };
  return (
    <div className='app'>
      <BasicForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
