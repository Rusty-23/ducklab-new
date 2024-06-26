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
    mysqli \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    intl \
    zip

# Install Composer
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

# Copy PHP files
COPY . /var/www/html

# Install Laravel dependencies
RUN composer install --no-interaction --optimize-autoloader --no-dev

# Enable Apache rewrite module
RUN a2enmod rewrite

# Expose the default Apache port (80)
EXPOSE 80

# Start the Apache web server
CMD ["apache2-foreground"]