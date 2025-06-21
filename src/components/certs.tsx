import Slider from 'react-slick';

const certifications = [
	{
		id: 1,
		title: 'AWS Certified Cloud Practitioner',
		image: '/awsccp.png',
		credlyLink: 'https://www.credly.com/users/hamzamomin',
		certLink: 'https://www.linkedin.com/in/hamzamomin/details/certifications/',
	},
	{
		id: 2,
		title: 'Azure AI-900',
		image: '/ai-900.png',
		credlyLink: 'https://www.credly.com/users/hamzamomin',
		certLink:
			'https://learn.microsoft.com/api/credentials/share/en-us/HamzaMomin-4430/70F2B077493FB879?sharingId=78FB71087244859F',
	},
	{
		id: 3,
		title: 'Google IT Support',
		image: '/google.png',
		credlyLink: 'https://www.credly.com/users/hamzamomin',
		certLink: 'https://www.coursera.org/account/accomplishments/professional-cert/6ZUF6RFWR4A8',
	},
	{
		id: 4,
		title: 'IBM IT Support Professional Certificate',
		image: '/ibm.png',
		credlyLink: 'https://www.credly.com/users/hamzamomin',
		certLink: 'https://coursera.org/share/0ac78ab417730e713e8ac5c3dea5690c',
	},
	{
		id: 5,
		title: 'Data Analyst in SQL',
		image: '/datacamp.png',
		credlyLink: 'https://www.credly.com/users/hamzamomin',
		certLink:
			'https://www.datacamp.com/completed/statement-of-accomplishment/track/3a9d3a51c39e3f926c0e4fbf9b5d32c3c9ab6fe3',
	},
	{
		id: 6,
		title: 'Scrimba Frontend Path ( In Progress )',
		image: '/Scrimba-logo.png',
		credlyLink: 'https://www.credly.com/users/hamzamomin',
		certLink: 'https://scrimba.com/frontend-path-c0j',
	},
];

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3.0,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},

		{
			breakpoint: 440,
			settings: {
				slidesToShow: 1.2,
				slidesToScroll: 2,
			},
		},

	],
};

type CertificationCardProps = {
	title: string;
	image: string;
	credlyLink: string;
	certLink: string;
};

const CertificationCard = ({ title, image, credlyLink, certLink }: CertificationCardProps) => {
	return (

		<div className="cards  bg-amber-50 rounded-lg mt-8 p-4 w-[320px] h-[270px] flex flex-col justify-between mx-auto border-4 border-black shadow-lg shadow-black/70">

			<div className="flex flex-col items-center">
				<img src={image} alt={title} className="w-28 h-28 object-contain mb-3" />
				<p className="text-center font-semibold text-black text-base">{title}</p>
			</div>
			<div className="mt-3 flex gap-3 justify-center">
				<a
					href={credlyLink}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-yellow-500 text-black font-bold text-sm px-3 py-1 rounded border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400"
				>
					Credly
				</a>
				<a
					href={certLink}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-blue-500 text-white font-bold text-sm px-3 py-1 rounded border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-400"
				>
					View Cert
				</a>
			</div>
		</div>
	);
};

export default function Certs() {
	return (
		<div className="max-w-6xl mx-auto">
			<style>{`
        /* Increase space between slick dots */
        .slick-dots li {
          margin: 0 12px !important;
        }
        /* Make dots a bit larger for better visibility */
        .slick-dots li button:before {
         margin-top: 42px !important;
        }
        
      `}</style>

			<span className="block  md:hidden !text-[40px] font-bold mb-2 text-end  mr-4 mt-8">Certifications</span>
			<Slider {...settings}>
				{certifications.map((cert) => (
					<div key={cert.id} className="flex justify-center">
						<CertificationCard {...cert} />
					</div>
				))}
			</Slider>

			<div className="hidden sm:flex justify-end items-end animate-float">

				<StarSvg />

			</div>

		</div>
	);
}


function StarSvg() {
	return (
		<svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M124.276 101.397L97.9355 75.0561L118.391 60.5362L144.732 86.8771L124.276 101.397Z" fill="#FFCE51" />
			<path d="M97.9386 75.0499L83.2364 73.5461L103.695 59.0292L118.394 60.5331L97.9386 75.0469V75.0499Z" fill="#FFCE51" />
			<path d="M66.2367 29.0876L8.86411 25.0824L29.3224 10.5594L86.6919 14.5738L66.2367 29.0876Z" fill="#FFCE51" />
			<path d="M52.5136 42.8201L66.243 29.0907L70.6404 25.9718L72.9688 28.3033L103.698 59.0323L83.2427 73.5492L52.5136 42.8232V42.8201Z" fill="#FFCE51" />
			<path d="M8.86411 25.0793L66.2368 29.0876L52.5073 42.8201L83.2333 73.5461L97.9385 75.05L124.28 101.391L96.2339 112.446L85.1788 140.495L58.8378 114.154L57.3339 99.4486L26.6049 68.7226L12.8755 82.4489L8.86411 25.0793Z" fill="#89DCFF" />
			<path d="M113.672 105.569L96.2247 112.446L85.1696 140.492L105.628 125.975L113.669 105.569H113.672Z" fill="#F11F9D" />
			<path d="M8.86411 25.0793L66.2368 29.0876L52.5073 42.8201L83.2333 73.5461L97.9385 75.05L124.279 101.391L96.2339 112.446L85.1788 140.495L58.8378 114.154L57.3339 99.4486L26.6049 68.7226L12.8755 82.4489L8.86411 25.0793Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
			<path d="M113.672 105.569L96.2247 112.446L85.1696 140.492L105.628 125.975L113.669 105.569H113.672Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
			<path d="M124.276 101.397L97.9355 75.0561L118.391 60.5362L144.732 86.8771L124.276 101.397Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
			<path d="M97.9386 75.0499L83.2364 73.5461L103.695 59.0292L118.394 60.5331L97.9386 75.0469V75.0499Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
			<path d="M66.2367 29.0876L8.86411 25.0824L29.3224 10.5594L86.6919 14.5738L66.2367 29.0876Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
			<path d="M52.5136 42.8201L66.243 29.0907L70.6404 25.9718L72.9688 28.3033L103.698 59.0323L83.2427 73.5492L52.5136 42.8232V42.8201Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
		</svg>


	);
}