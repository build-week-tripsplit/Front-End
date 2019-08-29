import React from "react";
import {Card, Feed} from 'semantic-ui-react';

function Trip({ trip }) {
  return (
    <div className="trip">
    <Card>
    <Card.Content>
    <h3>{trip.title}</h3>
    </Card.Content>
    <Card.Content>
      <Feed>

        <Feed.Event>
          <Feed.Label image='./../flight_unsplash.jpg' />
          <Feed.Content>
            <Feed.Date content={trip.start_date} />  {//Needs an epoch conversion.
            }
            <h3>{trip.location}</h3>
            <Feed.Summary>
              {trip.description} 
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

      </Feed>

    </Card.Content>
  </Card>

    </div>
  );
}

export default Trip;
