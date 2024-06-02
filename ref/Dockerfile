# Use the official PHP image with Apache
FROM php:8.2-apache

# Set the working directory
WORKDIR /var/www/html

# Install required dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    curl

# Install PHP extensions
RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    intl \
    zip

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Install Composer
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

# Copy the Laravel app files to the container
COPY . /var/www/html

# Install Laravel dependencies
RUN composer install --no-interaction --optimize-autoloader --no-dev

# Generate the application key
RUN php artisan key:generate

RUN npm install
# RUN npm run build

# Set the appropriate permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

RUN php artisan key:generate
# RUN php artisan migrate
# RUN php artisan db:seed

# Enable Apache rewrite module
RUN a2enmod rewrite

# Expose the port on which the app will run
EXPOSE 80

# Start the Apache web server
CMD ["apache2-foreground"]