<div className='wrapper'>
					<Splide
						options={options}
						aria-labelledby='products'
						hasTrack={false}>
						<SplideTrack>
							{CollectionData.map((product) => {
								const {
									id,
									image,
									name,
									price,
									discount,
									availability
								} = product;
								return (
									<SplideSlide key={id}>
										<div
											className='product card'
											style={{ position: 'relative' }}>
											<div className='product-image'>
												<img
													src={`../images/${image}`}
													alt={name}
													className='card-img-top'
												/>
											</div>
											<div className='product-info card-body'>
												<h4 className='card-title'>
													{name}
												</h4>
												<div className='price-info'>
													<p className='price card-text'>
														${price}
													</p>
													<p className='discount card-text'>
														${discount}
													</p>
												</div>
											</div>
											<div className='availability card-footer'>
												{availability}
											</div>
											<div className='btn-container card-footer'>
												<button
													className='cart-btn btn btn-primary'
													onClick={() =>
														addToCart(product)
													}>
													Add to Cart
												</button>
												<button
													className={`wish-btn btn ${
														isFilled(product)
															? 'btn-filled'
															: 'btn-outline-primary'
													}`}
													onClick={() =>
														toggleWishlistItem(
															product
														)
													}
													title='Add to wishlist'>
													{isFilled(product) ? (
														<i className='fas fa-heart'></i>
													) : (
														<i className='far fa-heart'></i>
													)}
												</button>
											</div>
										</div>
									</SplideSlide>
								);
							})}
						</SplideTrack>
					</Splide>
				</div>


<Splide options={options}
					aria-labelledby='testimonial'
					hasTrack={false}
				>
					<SplideTrack>
						{data.map((item) => (
						    const {id, image, name, text, work} = item
							<SplideSlide key={id}>
								<div className='testimonial-card'>
									<div className='testimonial-img'>
										<img
											src={image}
											alt={name}
											loading='lazy'
										/>
									</div>
									<div className='testimonial-info'>
										<p className='testimonial-text'>
											{item.text}
										</p>
										<div className='testimonial-user'>
											<h3 className='testimonial-user-name'>
												{item.name}
											</h3>
										</div>
										<small>{item.work}</small>
									</div>
								</div>
							</SplideSlide>
						))}
					</SplideTrack>
				</Splide>