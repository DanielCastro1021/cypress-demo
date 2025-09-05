import React from 'react';
import { mount } from '@cypress/react';
import FancyButton from '../../src/components/FancyButton';

describe('FancyButton Component', () => {
    it('renders the FancyButton with default props', () => {
        mount(<FancyButton />);
        cy.get('button').should('exist');
    });

    it('renders the FancyButton with custom text', () => {
        const buttonText = 'Click Me';
        mount(<FancyButton>{buttonText}</FancyButton>);
        cy.get('button').contains(buttonText).should('exist');
    });

    it('triggers onClick when clicked', () => {
        const onClick = cy.stub();
        mount(<FancyButton onClick={onClick}>Click Me</FancyButton>);
        cy.get('button').click();
        cy.wrap(onClick).should('have.been.calledOnce');
    });
});