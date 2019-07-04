import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const DividerExampleVertical = () => (
  <Segment>
    <Grid columns={2} relaxed="very">
      <Grid.Columns>
        <h1>HOME</h1>
        {this.state.homeScore}
        <div>
          <button onClick={this.homeScoreAdd}>+</button>
          <button onClick={this.homeScoreSubstract}>-</button>
        </div>
      </Grid.Columns>
      <Grid.Columns>
        <h1>AWAY</h1>
        {this.state.awayScore}
        <div>
          <button onClick={this.awayScoreAdd}>+</button>
          <button onClick={this.awayScoreSubstract}>-</button>
        </div>
      </Grid.Columns>
    </Grid>
    <devider vertical>And</devider>
  </Segment>
);

export default DividerExampleVertical
