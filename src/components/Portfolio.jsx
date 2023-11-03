import { portfolioData } from '../assets/data/data';
function Portfolio() {
	return (
		<section
			name='portfolio'
			className='min-h-screen p-10 dark:border-t-2 bg-offwhite dark:text-offgray dark:bg-primary dark:border-info text-primary'
		>
			<div className='container flex flex-col justify-center max-w-screen-xl mx-auto'>
				<div className=''>
					<h1 className='inline text-4xl font-bold border-b-4 border-accent'>My Portfolio</h1>
					<p className='py-6 text-2xl'>Check out some of my work</p>
				</div>

				<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 '>
					{portfolioData.map(({ id, src, demo, code }) => {
						console.log(src);
						return (
							<div
								key={id}
								className='duration-200 rounded-lg shadow-md dark:shadow-info shadow-primary hover:scale-105'
							>
								<img src={src} className='rounded-md ' />
								<div className='flex items-center justify-center'>
									<button className='w-1/2 px-6 py-3 m-4 text-xl font-semibold duration-200 hover:scale-105'>
										<a href={demo} target='_blank' rel='noreferrer'>
											Demo
										</a>
									</button>
									<button className='w-1/2 px-6 py-3 m-4 text-xl font-semibold duration-200 hover:scale-105'>
										<a href={code} target='_blank' rel='noreferrer'>
											Code
										</a>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
