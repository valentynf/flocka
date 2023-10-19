import Message from './Message/Message';
import styles from './MessagesList.module.css';

const messagesData = [
  {
    username: 'Dwight Schrute',
    timestamp: '09:00',
    message: 'Identity theft is not a joke, Jim!',
  },
  {
    username: 'Jim Halpert',
    timestamp: '09:05',
    message: 'Bears, beets, Battlestar Galactica.',
  },
  {
    username: 'Dwight Schrute',
    timestamp: '09:10',
    message:
      "What is my perfect crime? I break into Tiffany's at midnight. Do I go for the vault? No. I go for the chandelier. It's priceless. As I'm taking it down, a woman catches me. She tells me to stop. It's her father's business. She's Tiffany. I say no. We make love all night. In the morning, the cops come and I escape in one of their uniforms. I tell her to meet me in Mexico, but I go to Canada. I don't trust her. Besides, I like the cold. Thirty years later, I get a postcard. I have a son and he's the chief of police. This is where the story gets interesting. I tell Tiffany to meet me in Paris by the Trocadero. She's been waiting for me all these years. She's never taken another lover. I don't care. I don't show up. I go to Berlin. That's where I stashed the chandelier.",
  },
  {
    username: 'Jim Halpert',
    timestamp: '09:15',
    message: 'Question: What kind of bear is best?',
  },
  {
    username: 'Dwight Schrute',
    timestamp: '09:20',
    message: "That's a ridiculous question.",
  },
  {
    username: 'Jim Halpert',
    timestamp: '09:25',
    message: 'False. Black bear.',
  },
  {
    username: 'Dwight Schrute',
    timestamp: '09:30',
    message: "That's debatable. There's basically two schools of thought.",
  },
  {
    username: 'Jim Halpert',
    timestamp: '09:35',
    message: 'Fact: Bears eat beets.',
  },
  {
    username: 'Dwight Schrute',
    timestamp: '09:40',
    message: "No, you don't understand. Bears. Beets. Battlestar Galactica.",
  },
  {
    username: 'Jim Halpert',
    timestamp: '09:45',
    message: 'What would you do if a bear showed up at Dunder Mifflin?',
  },
  {
    username: 'Dwight Schrute',
    timestamp: '09:50',
    message: "I'd wrestle it into submission!",
  },
  {
    username: 'Jim Halpert',
    timestamp: '09:55',
    message: "Dwight, we don't even have bears in Scranton.",
  },
  {
    username: 'Dwight Schrute',
    timestamp: '10:00',
    message: "I'm always prepared for any situation.",
  },
  {
    username: 'Jim Halpert',
    timestamp: '10:05',
    message: 'How many beets do you own, Dwight?',
  },
  {
    username: 'Dwight Schrute',
    timestamp: '10:10',
    message:
      "I have over 1,200 beets on my farm. They're the best cash crop for a small family farm.",
  },
  {
    username: 'Jim Halpert',
    timestamp: '10:15',
    message: "That's a lot of beets. Do you ever eat them for breakfast?",
  },
  {
    username: 'Dwight Schrute',
    timestamp: '10:20',
    message:
      'Every day. Beets provide the necessary fuel to start the day right.',
  },
  {
    username: 'Jim Halpert',
    timestamp: '10:25',
    message: "And what's your favorite beet recipe?",
  },
  {
    username: 'Dwight Schrute',
    timestamp: '10:30',
    message: 'My beet and Schrute farms beet soup is legendary.',
  },
  {
    username: 'Jim Halpert',
    timestamp: '10:35',
    message: 'Sounds interesting. Maybe I should try it sometime.',
  },
  {
    username: 'Dwight Schrute',
    timestamp: '10:40',
    message: "You won't find a better beet soup anywhere else.",
  },
];

function MessagesList() {
  return (
    <div className={styles['messages-list']}>
      <div className={styles['reverse-scroll']}>
        {messagesData
          .map((el, i) => <Message data={el} key={i} />)
          //adding pathetic workaround with reverse for the resize bug
          .reverse()}
      </div>
    </div>
  );
}

export default MessagesList;
