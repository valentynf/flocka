import CollapsibleList from './components/CollapsibleList/CollapsibleList';

const testData = {
  name: 'Channels',
  children: [
    '#general',
    '#engineering',
    '#productdevelopment',
    '#designteam',
    '#marketing',
    '#sales',
    '#support',
    '#companyannouncements',
    '#technews',
    '#randomchat',
  ],
};

function App() {
  return <CollapsibleList data={testData} />;
}

export default App;
