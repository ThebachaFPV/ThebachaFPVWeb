import React from "react";

const Board: React.FC = () => (
  <div style={{ padding: '2rem', color: 'var(--white)', maxWidth: 900, margin: '0 auto' }}>
    <h1>Thebacha FPV Racing League Board</h1>
    <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>
      The Board of Directors is the primary governing body of the Thebacha FPV Racing League once it is formally established as a society. The board ensures the league’s long-term sustainability, strategic direction, and alignment with its mission and values.
    </p>
    <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
      <h2>Board Structure</h2>
      <ul>
        <li><b>Executive Officers:</b> President, Vice President, Secretary, Treasurer</li>
        <li><b>Directors-at-Large:</b> Elected members representing the broader membership</li>
        <li><b>Committee Chairs:</b> Leaders of standing committees may serve on or report to the board</li>
      </ul>
    </section>
    <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
      <h2>Board Responsibilities</h2>
      <ul>
        <li>Set the league’s strategic direction and major policies</li>
        <li>Oversee finances, risk management, and legal compliance</li>
        <li>Approve and amend bylaws and rules</li>
        <li>Appoint and oversee committees</li>
        <li>Represent the interests of all members</li>
        <li>Ensure sound governance and organizational sustainability</li>
        <li>Document and communicate all major decisions</li>
      </ul>
    </section>
    <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
      <h2>How the Board Works</h2>
      <ul>
        <li>Board members are elected by the membership at the Annual General Meeting</li>
        <li>The board meets regularly (at least monthly) and follows formal meeting procedures</li>
        <li>Decisions are made by majority vote, with quorum as defined in the bylaws</li>
        <li>Executive officers implement board decisions and manage day-to-day operations</li>
        <li>Committees and the Race Management Team report to the board or designated executive</li>
        <li>All significant decisions and meeting minutes are documented for transparency</li>
      </ul>
    </section>
    <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
      <h2>Accountability</h2>
      <ul>
        <li>The board is accountable to the membership through regular meetings and annual elections</li>
        <li>Members can observe board meetings (except in-camera sessions) and receive advance notice of agendas</li>
        <li>Major changes, such as bylaw amendments or board elections, require a vote of the membership</li>
      </ul>
    </section>
    <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
      <h2>Special Considerations for the North</h2>
      <ul>
        <li>Board and committee roles may be combined or rotated due to a smaller volunteer pool</li>
        <li>Remote participation and flexible meeting schedules accommodate geographic and seasonal challenges</li>
        <li>Emphasis on clear documentation and knowledge transfer for continuity</li>
      </ul>
    </section>
    <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
      <h2>How the Board (and League) Works During Initial Formation</h2>
      <p>
        In the first year, before formal society status, the league operates as an informal group. There is no formal board yet. Instead, founding executives (typically the President and Vice President) handle all executive and operational functions. Decision-making is by consensus, with the President having authority for urgent matters. All members are encouraged to provide input at regular meetings and through informal channels. Key decisions are documented for transparency and future reference. As the league grows, this structure transitions to a formal board and society model.
      </p>
      <ul>
        <li>Founding executives (President & Vice President) make decisions by consensus</li>
        <li>President may act independently for urgent matters, informing the VP after</li>
        <li>All members can provide input at meetings or informally</li>
        <li>Key decisions are documented for continuity</li>
        <li>Structure is flexible and focused on practicality and quick implementation</li>
        <li>Transition to a formal board occurs as the league incorporates as a society</li>
      </ul>
    </section>
  </div>
);

export default Board;
