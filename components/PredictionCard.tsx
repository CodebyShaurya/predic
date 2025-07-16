'use client';

import { useState } from 'react';
import { Gift, Bookmark, TrendingUp, ArrowLeftRight , ChevronsUp} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface PredictionOption {
  name: string;
  percentage: number;
}

interface PredictionCardProps {
  prediction: {
    id: number;
    type: 'list' | 'binary';
    image: string;
    title: string;
    volume: string;
    options?: PredictionOption[];
    percentage?: number;
    yesPrice?: string;
    noPrice?: string;
  };
}

export default function PredictionCard({ prediction }: PredictionCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  if (prediction.type === 'list') {
    return (
      <Card className="bg-[#1E1E1E] border-gray-700 hover:bg-gray-750 transition-colors">
        <CardHeader className="pb-3">
          <div className="flex items-start space-x-3">
            <img
              src={prediction.image}
              alt={prediction.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 mt-1">
              <h3 className="text-white font-semibold text-md leading-tight">
                {prediction.title}
              </h3>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="py-2 ">
          <div className="space-y-3">
            {prediction.options?.map((option, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300 text-md">{option.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">{option.percentage}%</span>
                  <div className="flex space-x-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 px-2 bg-green-200 bg-opacity-10 hover:bg-green-700 text-xl text-green-400 text-xs"
                    >
                      Yes
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 px-2 bg-red-200 bg-opacity-10 hover:bg-red-700 text-xl text-red-400 text-xs"
                    >
                      No
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center pt-3">
          <span className="text-gray-200 text-lg font-medium flex items-center space-x-2">{prediction.volume} Vol    </span>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
            >
              <Gift className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBookmarked(!bookmarked)}
              className={`h-6 w-6 p-0 ${
                bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Bookmark className="h-6 w-6" fill={bookmarked ? 'currentColor' : 'none'} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }

  // Binary prediction card
  return (
    <Card className="bg-[#1E1E1E] border-gray-700 hover:bg-gray-750 transition-colors">
      {/* <div>
        <div className="transition rounded-md shadow-md shadow-black/4 min-h-[180px] h-full flex flex-col overflow-hidden pt-3 relative hover:-translate-y-px hover:shadow-black/8 hover:shadow-md  border">
          <div className="c-dhzjXW c-dhzjXW-ilnIma-css">
            <div className="c-PJLV c-PJLV-icPidla-css flex">
              <div
                className="c-PJLV c-PJLV-igTCeuK-css"
                style={{ width: 38, minWidth: 38, height: 38, borderRadius: 4 }}
              >
                <img src={prediction.image} alt={prediction.title} className="w-full h-full object-cover" />
              </div>
              <div className="c-dhzjXW c-dhzjXW-ijblzia-css">
              <a
                href="/event/israel-x-hamas-ceasefire-before-august"
                className="c-fQKxGY c-fQKxGY-ikpfMtn-css"
              >
                <p
                  className="c-dqzIym c-dqzIym-fxyRaa-color-normal c-dqzIym-cTvRMP-spacing-normal c-dqzIym-dxJWYY-weight-bold c-dqzIym-gKzrVx-lines-2 c-dqzIym-igyRnGv-css"
                  style={{ paddingRight: 0, width: "auto", WebkitLineClamp: 2 }}
                >
                  Israel x Hamas ceasefire before August?
                </p>
              </a>
              <div className="c-dhzjXW c-dhzjXW-ijpiDlP-css">
                <div className="c-dhzjXW c-dhzjXW-ieGfxFg-css">
                  <div className="c-dhzjXW">
                    <svg
                      width={58}
                      height="34.03579715234098"
                      viewBox="-29 -29 58 34.03579715234098"
                      style={{ width: 58, maxWidth: 58, overflow: "visible" }}
                    >
                      <path
                        d="M -10.39367053681372 -27.07383236841885 A 29 29 0 0 1 28.559424837354037 5.035797152340968"
                        fill="none"
                        stroke="#858D92"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M -28.560424837354034 5.035797152340978 A 29 29 0 0 1 -15.794532015435783 -24.321446470417296"
                        fill="none"
                        stroke="#E27A39"
                        strokeOpacity="0.6715000000000001"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="c-dhzjXW c-dhzjXW-illkSdX-css">
                    <p className="font-medium text-[16px] text-center">37%</p>
                    <p className="c-dqzIym c-dqzIym-fxyRaa-color-normal c-dqzIym-cTvRMP-spacing-normal c-dqzIym-iIobgq-weight-medium c-dqzIym-idlRDgg-css">
                      chance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
          <div className="c-dhzjXW c-dhzjXW-ielYJTz-css">
            <div
              className="c-dhzjXW c-dhzjXW-ibrbOvV-css"
              style={{ opacity: 1, transform: "translateY(0px) translateZ(0px)" }}
            >
              <div className="c-dhzjXW c-dhzjXW-ibFYNkb-css">
                <button className="inline-flex items-center cursor-pointer transition justify-center gap-2 whitespace-nowrap rounded-sm !text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-green-500/15 dark:text-green-500 text-green-600 active:scale-100 py-2 relative w-full max-w-[calc(50%-.325rem)] overflow-hidden h-10 text-sm !rounded-[4px] px-2 group pl-3 dark:hover:bg-green-400 hover:bg-green-600 hover:!text-white">
                  <div className="flex items-center gap-x-1.5">
                    <p className="text-sm font-semibold truncate">Buy Yes</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      className="transition group-hover:text-white group-hover:animate-pulse"
                    >
                      <title>double-chevron-up</title>
                      <g
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <polyline points="10 5.75 6 1.75 2 5.75" />
                        <polyline points="10 10.25 6 6.25 2 10.25" />
                      </g>
                    </svg>
                  </div>
                </button>
                <button className="inline-flex items-center cursor-pointer transition justify-center gap-2 whitespace-nowrap rounded-sm !text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-red-500/9 dark:bg-red-500/15 text-red-500 hover:bg-red-500/13 dark:hover:bg-red-500/25 active:scale-100 py-2 relative w-full max-w-[calc(50%-.325rem)] overflow-hidden h-10 text-sm !rounded-[4px] px-2 group pl-3 hover:!bg-red-500 hover:!text-white">
                  <div className="flex items-center gap-x-1.5">
                    <p className="text-sm font-semibold truncate">Buy No</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      className="transition group-hover:text-white group-hover:animate-pulse"
                    >
                      <title>double-chevron-down</title>
                      <g
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <polyline points="2 6.25 6 10.25 10 6.25" />
                        <polyline points="2 1.75 6 5.75 10 1.75" />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="c-dhzjXW c-dhzjXW-icAXHHE-css">
                <div className="c-dhzjXW c-dhzjXW-iwqesU-css">
                  <div className="c-dhzjXW c-dhzjXW-igJjTZm-css">
                    <p className="text-text-secondary">$4m Vol.</p>
                    <div className="flex items-center gap-1.5 pl-1 text-text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <title>repeat-3</title>
                        <g
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <polyline points="9.25 4.75 11.25 2.75 9.25 .75" />
                          <path d="m11,2.75H3.25c-1.105,0-2,.895-2,2v.5" />
                          <polyline points="2.75 7.25 .75 9.25 2.75 11.25" />
                          <path d="m1,9.25h7.75c1.105,0,2-.895,2-2v-.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="c-dhzjXW c-dhzjXW-iknqeEl-css">
                    <div className="flex">
                      <button data-state="closed" />
                      <button className="inline-flex items-center cursor-pointer active:scale-[97%] transition justify-center gap-2 whitespace-nowrap rounded-sm !text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-button-ghost-bg hover:bg-button-ghost-bg-hover text-text-secondary w-7 h-7">
                        <svg
                          height={16}
                          width={16}
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="currentColor">
                            <line
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              x1={9}
                              x2={9}
                              y1="5.25"
                              y2="16.25"
                            />
                            <path
                              d="M3.75,3.5c0-.966,.784-1.75,1.75-1.75,2.589,0,3.5,3.5,3.5,3.5h-3.5c-.966,0-1.75-.784-1.75-1.75Z"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12.5,5.25h-3.5s.911-3.5,3.5-3.5c.966,0,1.75,.784,1.75,1.75s-.784,1.75-1.75,1.75Z"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M14.25,8.25v6c0,1.105-.895,2-2,2H5.75c-1.105,0-2-.895-2-2v-6"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <rect
                              height={3}
                              width="14.5"
                              fill="none"
                              rx={1}
                              ry={1}
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              x="1.75"
                              y="5.25"
                            />
                          </g>
                        </svg>
                      </button>
                      <button
                        className="inline-flex items-center cursor-pointer active:scale-[97%] transition justify-center gap-2 whitespace-nowrap rounded-sm !text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-button-ghost-bg text-button-ghost-text hover:bg-button-ghost-bg-hover w-7 h-7"
                        aria-label="Add to favorites"
                      >
                        <div className="bookmark_bookmarkButton__85ZzN bookmark_small__jUq2p" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <img
              src={prediction.image}
              alt={prediction.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold text-md leading-tight 2xl:mr-0 mr-5 ">
                {prediction.title}
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeDasharray={`${prediction.percentage || 0}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{prediction.percentage}%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 text-xs">{prediction.percentage}%</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="py-2 mt-3 ">
        <div className="flex space-x-2">
          <Button
            className="flex-1 bg-green-200 bg-opacity-10 hover:bg-green-700 text-xl text-green-400 h-12"
            size="sm"
          >
            Buy Yes <ChevronsUp className='h-8 w-8' />
          </Button>
          <Button
            className="flex-1 bg-red-200 bg-opacity-10 hover:bg-red-700 text-xl text-red-400 h-12"
            size="sm"
          >
            Buy No <ChevronsUp className='h-8 w-8' />
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-3">
        <span className="text-gray-200 text-lg font-medium flex items-center space-x-2">{prediction.volume} Vol <ArrowLeftRight className='ml-2 h-6 w-6' />    </span>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-gray-400 hover:text-white"
          >
            <Gift className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setBookmarked(!bookmarked)}
            className={`h-6 w-6 p-0 ${
              bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Bookmark className="h-6 w-6" fill={bookmarked ? 'currentColor' : 'none'} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}