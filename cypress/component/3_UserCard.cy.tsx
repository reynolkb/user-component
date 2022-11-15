import { ThemeProvider } from '@mui/material';
import { theme } from 'components/Theme/Theme';
import { UserCard } from '../../components/Users/UserCard';

describe('UserCard.cy.ts', () => {
  it('mounts component and props are read correctly', () => {
    cy.mount(
      <ThemeProvider theme={theme}>
        <UserCard
          firstName={'Alexander'}
          lastName={'the Great'}
          role={'Administrator'}
          email={'alexander@conqueror.com'}
          street={'1234 Not a Fake Street'}
          city={'Dallas'}
          state={'TX'}
          zip={'75201'}
          phone={'5558675309'}
          createdAt={'1970-01-01T06:01:00.000Z'}
          lastLoggedIn={'1970-01-01T06:02:00.000Z'}
        />
      </ThemeProvider>
    );

    cy.get('[alt="administrator"]').should('be.visible');
    cy.get('.MuiTypography-UserName').should('contains.text', 'Alexander the Great');
    cy.get('.MuiTypography-UserRole').should('contains.text', 'Administrator');
    cy.get('.MuiTypography-Email').should('contains.text', 'alexander@conqueror.com');
    cy.get('.MuiIconButton-root').click();
    cy.get('.MuiIconButton-root').should('have.attr', 'aria-expanded', 'true');
  });
});
