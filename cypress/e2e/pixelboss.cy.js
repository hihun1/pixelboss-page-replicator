describe('PixelBoss Basic Test', () => {
    it('Should load the page and show main elements', () => {
        cy.visit('https://pixelboss-page-replicator.lovable.app/');

        // Kiểm tra trang có tiêu đề đúng không
        cy.title().should('include', 'pixelboss');



        // Kiểm tra có nút bấm (button)
        cy.get('button').should('exist');
    });
});