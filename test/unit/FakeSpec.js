define(['/base/js/file_to_test.js'],function(toTest){
    describe('Make sure tests run', function() {
        it('should run these tests', function(){
            expect(toTest).toBe(5);
        })
    });
})