import { shouldLoadMore, hasReachThreshold } from '../EventsChecker';

describe('EventsChecker test', () => {
    const innerHeight = 500;
    const offsetHeight = 1000;
    const greaterScrollTop = 400;

    const scrollElement = {
        target: {
            documentElement: {
                scrollTop: 0,
                offsetHeight
            }
        }
    }

    let windowSpy;
    beforeEach(() => {
        windowSpy = jest.spyOn(global, 'window', 'get');
        windowSpy.mockImplementation(() => ({
            innerHeight,
        }));
    });

    afterEach(() => {
        scrollElement.target.documentElement.scrollTop = 0;
        windowSpy.mockRestore();
    });

    describe('hasReachThreshold test', () => {
        it('should should return false if we are less than 80% scrolling', () => {
            expect(hasReachThreshold(scrollElement)).toEqual(false);
        });

        it('should should return true if we are at more than 80% scrolling', () => {
            scrollElement.target.documentElement.scrollTop = greaterScrollTop;
            expect(hasReachThreshold(scrollElement)).toEqual(true);
        });
    });

    describe('shouldLoadMore test', () => {
        it('should return false if we are less than 80% scrolling despite the other parameters', () => {
            const hasNext = true;
            const isLoading = false;

            expect(shouldLoadMore(scrollElement, hasNext, isLoading)).toEqual(false);
        });

        it('should return false if we are more than 80% scrolling but is still loading', () => {
            scrollElement.target.documentElement.scrollTop = greaterScrollTop;
            const hasNext = true;
            const isLoading = true;

            expect(shouldLoadMore(scrollElement, hasNext, isLoading)).toEqual(false);
        });

        it('should return false if we are more than 80% scrolling but results does not have next', () => {
            scrollElement.target.documentElement.scrollTop = greaterScrollTop;
            const hasNext = false;
            const isLoading = false;

            expect(shouldLoadMore(scrollElement, hasNext, isLoading)).toEqual(false);
        });

        it('should return true if we are more than 80% scrolling and the results has next and is not loading', () => {
            scrollElement.target.documentElement.scrollTop = greaterScrollTop;
            const hasNext = true;
            const isLoading = false;

            expect(shouldLoadMore(scrollElement, hasNext, isLoading)).toEqual(true);
        });
    });
});