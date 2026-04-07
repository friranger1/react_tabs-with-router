import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

export const TabContent = ({ tabs }: { tabs: Tab[] }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : 'Tab not found'}
    </div>
  );
};
