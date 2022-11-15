import { UserContainer } from '../../components/Users/UserContainer';

describe('UserContainer.cy.ts', () => {
  it('mounts component', () => {
    cy.mount(<UserContainer />);
  });
});
