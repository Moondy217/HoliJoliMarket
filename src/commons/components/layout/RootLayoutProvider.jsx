import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import MainNavbar from '../../../pages/Main/components/MainNavbar';
import SubGreyMenu from '../../../pages/Main/components/SubGreyMenu';
import SubCateMenu from '../../../pages/Main/components/SubCateMenu';
import useMenuStore from '../../../store/menuStore';
import Footer from '../../../pages/Footer/index';

export default function RootLayoutProvider({ children }) {
  const queryClient = new QueryClient();
  const isSubCateMenu = useMenuStore((state) => state.isSubCateMenu);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-back overflow-hidden">

        {/* 상단 네비게이션 */}
        <MainNavbar />

        {/* 상태에 따라 SubGreyMenu 또는 SubCateMenu 렌더링 */}
        <div className="relative w-full bg-[#FBF3E5]">
          {isSubCateMenu ? (
            <SubCateMenu className="absolute top-0 left-0 w-full z-30" />
          ) : (
            <SubGreyMenu className="absolute top-0 left-0 w-full z-30" />
          )}
        </div>

        {/* 메인 페이지 콘텐츠 */}
        <div className="h-full flex justify-center items-center relative z-10 mx-[150px] mt-[104px]">
          {children}
        </div>

        {/* Footer를 항상 하단에 배치 */}
        <div className="mt-[130px]">
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  );
}

RootLayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
