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
	slidesToShow: 3,
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

			<div className="hidden sm:flex justify-start items-start">
				
				<StarSvg />
			</div>

		</div>
	);
}


function StarSvg() {
	return (
		<svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M100 40L100.012 99.941L122.961 44.5672L100.033 99.9502L142.426 57.5736L100.05 99.9666L155.433 77.0389L100.059 99.9884L160 100L100.059 100.012L155.433 122.961L100.05 100.033L142.426 142.426L100.033 100.05L122.961 155.433L100.012 100.059L100 160L99.9884 100.059L77.0389 155.433L99.9666 100.05L57.5736 142.426L99.9502 100.033L44.5672 122.961L99.941 100.012L40 100L99.941 99.9884L44.5672 77.0389L99.9502 99.9666L57.5736 57.5736L99.9666 99.9502L77.0389 44.5672L99.9884 99.941L100 40Z" stroke="black" stroke-width="4" />
		</svg>


	);
}