import useSignUpForm from '../../hooks/useSignUpForm';
import SingUpImg from './assets/signup.svg';

function SignUpPage() {
  const { formData, handleChange, handleSubmit } = useSignUpForm();

  return (
    <div className="flex justify-center items-center w-full h-full">

      {/* 회원가입 폼 */}
      <div className="flex w-[1024px] h-full">
        <div className="w-1/2 h-full">
          <div className="h-full">
            <div className="w-[512px] h-[112px]">
              <span className="block text-[44px] text-[#FFE603] font-bold">회원가입</span>
              <span className="block text-white mt-[16px]">만나서 반가워요, 우리는 HoliJoli 가족이에요</span>
            </div>

            {/* 입력 폼 */}
            <div className="relative w-full mt-4">
              <form noValidate onSubmit={handleSubmit} className="flex flex-col items-center">

                {/* 이름 입력 폼 */}
                <div className="relative w-full">
                  <span className="absolute -top-3 left-4 px-2 bg-back text-white">Name</span>
                  <div className="w-full mb-4">
                    <input
                      required
                      type="text"
                      name="username"
                      placeholder="이름"
                      value={formData.username}
                      onChange={handleChange}
                      className="h-[56px] w-full border border-[#000000] rounded-[13px] focus:outline-none px-3"
                    />
                    </div>
                </div>

                {/* 아이디 입력 폼 */}
                <div className="relative w-full">
                  <span className="absolute -top-3 left-4 px-2 bg-back text-white">ID</span>
                  <div className="w-full mb-4">
                    <input
                      required
                      type="text"
                      name="login_id"
                      placeholder="아이디"
                      value={formData.login_id}
                      onChange={handleChange}
                      className="h-[56px] w-full border border-[#000000] rounded-[13px] focus:outline-none px-3"
                    />
                  </div>
                </div>

                {/* 비밀번호 입력 폼 */}
                <div className="relative w-full">
                  <span className="absolute -top-3 left-4 px-2 bg-back text-white">Password</span>
                  <div className="w-full mb-4">
                    <input
                      required
                      type="password"
                      name="userpwd"
                      placeholder="비밀번호"
                      value={formData.userpwd}
                      onChange={handleChange}
                      className="h-[56px] w-full border border-[#000000] rounded-[13px] focus:outline-none px-3"
                    />
                    </div>
                </div>

                {/* 비밀번호 확인 입력 폼 */}
                <div className="relative w-full">
                  <span className="absolute -top-3 left-4 px-2 bg-back text-white">Password Confirm</span>
                  <div className="w-full">
                    <input
                      required
                      type="password"
                      name="userpwdConfirm"
                      placeholder="비밀번호 확인"
                      value={formData.userpwdConfirm}
                      onChange={handleChange}
                      className="h-[56px] w-full border border-[#000000] rounded-[13px] focus:outline-none px-3"
                    />
                    </div>
                </div>

                {/* 회원가입 버튼 */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="mt-[40px] h-[56px] w-full rounded-[13px] bg-[#075E25] text-white font-semibold text-[18px] hover:bg-[#184E40] focus:outline-none"
                  >
                    회원가입
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* 로그인 이미지 */}
        <div className="w-1/2 h-full flex justify-end">
          <img src={SingUpImg} alt="SingUp Img" className="w-[380px] h-[495px]" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;