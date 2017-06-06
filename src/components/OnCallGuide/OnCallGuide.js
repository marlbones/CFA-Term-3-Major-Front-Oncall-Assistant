import React, { Component } from 'react';
import './OnCallGuide.css';
import { Collapsible, CollapsibleItem, CardPanel, Modal } from 'react-materialize';

class OnCallGuide extends Component {
  render () {
    return (
      <div>
        <div className="guideIntro">
          <h5>On-Call Guide</h5>
          <p className="bold">When you receive a call:</p>
        </div>
        <Collapsible popout>
          <CollapsibleItem header='1. Check Safety'>
            <p>Check client safety. Make sure the client or Partner Agency staff member is in a safe setting and managing the situation as best as possible.</p>
          </CollapsibleItem>
          <CollapsibleItem header='2. Gather Information'>
            <p>Gather as much info as possible from the caller. Don't forget to gather:</p>
            <div className="bold">
              <p>- Identifying information: name, boat id, address, case manager.</p>
              <p>- Contact number and language.</p>
              <p>- Where the person is, who else is involved (persons, services)?</p>
              <p>- Are there any children present?</p>
            </div>
            <p>From this information, assess whether the incident is considered reportable.</p>
            <p>If the situation calls for it, contact an emergency service and make sure the client is safe before proceeding to the next step.</p>
            <CardPanel>
              <p><i className="material-icons">lightbulb_outline</i><span className="bold">Remember</span>: On-Call Assistant has sections to quickly search the client database for identifying client info, important service numbers, and a suicide/distress guide.</p>
            </CardPanel>
          </CollapsibleItem>
          <CollapsibleItem header='3. Report'>
            <p>If the event is considered reportable to the Department of Immigration:</p>
            <div className="bold">
              <Modal
                bottomSheet
                trigger={
                  <p className="cursorChange">- Check the incident reporting timeframes (click).</p>
                }>
                <p><span className="bold">Death - </span>Call DIAC within 30 mins - Write report within 1 hour.</p>
                <p><span className="bold">Critical - </span>Call DIAC within 30 mins - Write report within 1 business day.</p>
                <p><span className="bold">Major - </span>Call DIAC within 1 hour - Write report within 2 business days.</p>
                <p><span className="bold">Minor - </span>Call DIAC within 1 day - Write report within 3 business days.</p>
              </Modal>
              <p>- Contact Immigration Hotline - 1800 177 105</p>
            </div>
            <p>Keep a record of when this call was placed and what was reported.</p>
          </CollapsibleItem>
          <CollapsibleItem header='4. Resources'>
            <p>While on the phone to DIAC, make any requests/seek approval for additional resources. These may be things like:</p>
            <div className="bold">
              <p>- Accommodation</p>
              <p>- Emergency Repairs</p>
              <p>- Reconnections</p>
            </div>
            <p>Following approval of resources, a written Payment or Movement request must be submitted the following business day.</p>
          </CollapsibleItem>
          <CollapsibleItem header='5. Record'>
            <p>Using your remote access, record the incident in the client's internal database file.</p>
            <p>Send this information to the client's case manager, ensuring they get access to the incident report.</p>
            <p>Use the call log in On-Call Assistant to log calls/callouts made.</p>
          </CollapsibleItem>
          <CollapsibleItem header='6. Incident Report (within timeframe)'>
            <p>Write and submit an incident report as per the Reporting guidelines. Also upload report to client's internal database file.</p>
            <p>Incident reports must be completed within the reporting timeframes set by DIAC.</p>
          </CollapsibleItem>
          <CollapsibleItem header='7. Advise Case Manager (next day)'>
            <p>Liaise with the client's allocated case manager and provide relevant information.</p>
          </CollapsibleItem>
        </Collapsible>
      </div>
    )
  }
}

export default OnCallGuide;
