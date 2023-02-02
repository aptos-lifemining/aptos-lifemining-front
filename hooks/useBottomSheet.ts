import { useEffect, useRef } from 'react';
interface BottomSheetMetrics {
  touchStart: {
    sheetY: number; // touchstart에서 BottomSheet의 최상단 모서리의 Y값
    touchY: number; // touchstart에서 터치 포인트의 Y값
  };
  touchMove: {
    prevTouchY?: number; // 다음 touchmove 이벤트 핸들러에서 필요한 터치 포인트 Y값을 저장
    movingDirection: 'none' | 'down' | 'up'; // 유저가 터치를 움직이고 있는 방향
  };
  isContentAreaTouched: boolean; // 컨텐츠 영역을 터치하고 있음을 기록
}

export function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null);

  const content = useRef<HTMLDivElement>(null);

  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none',
    },
    isContentAreaTouched: false,
  });

  // Touch Event 핸들러들을 등록한다.
  useEffect(() => {
    const MAX_Y = window.innerHeight - 270;
    const MIN_Y = 60;

    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;

      // 바텀시트에서 컨텐츠 영역이 아닌 부분을 터치하면 항상 바텀시트를 움직입니다.
      if (!isContentAreaTouched) {
        return true;
      }

      // 바텀시트가 올라와있는 상태가 아닐 때는 컨텐츠 영역을 터치해도 바텀시트를 움직이는 것이 자연스럽습니다.
      if (sheet.current.getBoundingClientRect().y !== MIN_Y) {
        return true;
      }

      if (touchMove.movingDirection === 'down') {
        // 스크롤을 더 이상 올릴 것이 없다면, 바텀시트를 움직이는 것이 자연스럽습니다.
        // Safari 에서는 bounding 효과 때문에 scrollTop 이 음수가 될 수 있습니다. 따라서 0보다 작거나 같음 (<=)으로 검사합니다.
        return content.current.scrollTop <= 0;
      }

      console.log('content area!');
      return false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      console.log('dd');
      const { touchStart, touchMove } = metrics.current;

      touchStart.sheetY = sheet.current.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY === 0) {
        // 맨 처음 앱 시작하고 시작시
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = 'down';
      }

      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = 'up';
      }

      if (canUserMoveBottomSheet()) {
        console.log('can move');
        e.preventDefault();

        // 터치 시작점에서부터 현재 터치 포인트까지의 변화된 y값
        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;

        // nextSheetY 는 MIN_Y와 MAX_Y 사이의 값으로 clamp 되어야 한다
        if (nextSheetY <= MIN_Y) {
          nextSheetY = MIN_Y;
        }

        if (nextSheetY >= MAX_Y) {
          nextSheetY = MAX_Y;
        }

        // sheet 위치 갱신.
        sheet.current.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`);
      } else {
        // 컨텐츠를 스크롤하는 동안에는 body가 스크롤되는 것을 막습니다
        document.body.style.overflowY = 'hidden';
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      document.body.style.overflowY = 'auto';

      const { touchMove } = metrics.current;

      // Snap Animation
      const currentSheetY = sheet.current.getBoundingClientRect().y;

      if (currentSheetY !== MIN_Y) {
        if (touchMove.movingDirection === 'down') {
          sheet.current.style.setProperty('transform', 'translateY(0)');
        }

        if (touchMove.movingDirection === 'up') {
          sheet.current.style.setProperty('transform', `translateY(${MIN_Y - MAX_Y}px)`);
        }
      }

      // metrics 초기화.
      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
        },
        isContentAreaTouched: false,
      };
    };

    sheet.current.addEventListener('touchstart', handleTouchStart);
    sheet.current.addEventListener('touchmove', handleTouchMove);
    sheet.current.addEventListener('touchend', handleTouchEnd);

    return () => {
      sheet.current?.removeEventListener('touchstart', handleTouchStart);
      sheet.current?.removeEventListener('touchmove', handleTouchMove);
      sheet.current?.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // content 영역을 터치하는 것을 기록합니다.
  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current.isContentAreaTouched = true;
    };

    content.current?.addEventListener('touchstart', handleTouchStart);

    return () => content.current?.removeEventListener('touchstart', handleTouchStart);
  }, []);

  return { sheet, content };
}
