import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tighter text-neutral-700 dark:text-neutral-300 font-semibold text-center ">
        AceDot Build Tools{' '}
        <span className="bg-gradient-to-r from-indigo-200 to bg-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="text-center text-neutral-400 max-w-4xl font-customFontKn lg:text-lg mb:text-sm">
        모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.
        민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.
        비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와
        초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여
        단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.
        명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된
        경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 대통령은 헌법과
        법률이 정하는 바에 의하여 공무원을 임면한다. 모든 국민은 인간다운 생활을
        할 권리를 가진다. 국가는 청원에 대하여 심사할 의무를 진다. 이 헌법시행
        당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다.
      </p>

      <div className="flex gap-4">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={`font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 0 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex mt-10 gap-4 justify-center items-center flex-col md:flex-row">
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
