import { FC } from 'react';
import classNames from '@/components/tasks/card/card.module.scss';
import { task } from '@/components/constants/types';
import Accordion from '@/components/Accordion';

function renderBlockerTaskList(dependsOntasks: string[]) {
  return dependsOntasks.map((item) => (
    <>
      <b>Task ID: </b>
      {item}
    </>
  ));
}

type Props = {
  content: task,
};

const informationElement = (title: string, value: string) => (
  <span className={classNames.statusElement}>
    <span className={classNames.statusLable}>{`${title}: `}</span>
    <strong>{value}</strong>
  </span>
);

const Card: FC<Props> = ({ content }) => {
  const {
    title,
    endsOn,
    startedOn,
    ownerId,
    status,
    dependsOn,
  } = content;

  const ownerProfilePic = `${process.env.NEXT_PUBLIC_GITHUB_IMAGE_URL}${ownerId}/img.png`;

  return (
    <div className={classNames.card}>
      <span className={classNames.prTitle}>{title}</span>
      {informationElement('Estimated completion', endsOn)}
      {informationElement('Started', startedOn)}
      <div className={classNames.cardFooter}>
        <div className={classNames.profilePicture}>
          <img
            src={ownerProfilePic}
            alt="ownerId profile"
          />
          <strong>{ownerId}</strong>
        </div>
        <Accordion open={false} mainHeading={false} title="Depends on">
          {renderBlockerTaskList(dependsOn)}
        </Accordion>
        {informationElement('Status', status)}
      </div>
    </div>
  );
};

export default Card;
