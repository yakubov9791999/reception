"""
Django settings for reception project.

Generated by 'django-admin startproject' using Django 3.0.8.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""
import os
import sys
from datetime import timedelta

import pytz
from dotenv import load_dotenv
from loguru import logger
from django.utils.translation import gettext_lazy as _

env_path = "./deploy/.env"
load_dotenv(dotenv_path=env_path)
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True if os.getenv("DEBUG") == 'True' else False

ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'modeltranslation',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'user.apps.UserConfig',
    'django.contrib.sites',
    'service',
    'docxtpl',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'application',
    'rest_framework',
    'rest_framework.authtoken',
    'djoser',
    'django.contrib.humanize',
    'django_crontab',
    'paycom',
    'click',
    'clickuz',
    'payments',
    'reception',
    'partners',
    'corsheaders',
    'help',
    'ckeditor',
    'ckeditor_uploader',
    'landing',
    'driver_license'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    # 'solid_i18n-1.4.2.dist-info.',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.locale.LocaleMiddleware',

]

ROOT_URLCONF = 'reception.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.i18n',
            ],
        },
    },
]

WSGI_APPLICATION = 'reception.wsgi.application'

if os.getenv("PRODUCTION") == 'True':
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql_psycopg2",
            "NAME": os.getenv("POSTGRES_DB"),
            "USER": os.getenv("POSTGRES_USER"),
            "HOST": os.getenv("POSTGRES_HOST"),
            "PORT": os.getenv("POSTGRES_PORT"),
            "PASSWORD": os.getenv("POSTGRES_PASSWORD"),
        }
    }
else:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql_psycopg2",
            "NAME": os.getenv("POSTGRES_DB"),
            "USER": os.getenv("POSTGRES_USER"),
            "HOST": 'localhost',
            "PORT": os.getenv("POSTGRES_PORT"),
            "PASSWORD": os.getenv("POSTGRES_PASSWORD"),
        }
    }

STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

LOG_FILE_PATH = '/home/pyth/reception/logs/debug.log'
logger.add(sys.stderr, format="{time} {level} {messege}", level="DEBUG")
# logger.debug('DEBUG')
# logger.info('INFO')
# logger.error('ERROR')


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/


DATE_INPUT_FORMATS = ['%d.%m.%Y']
DATETIME_FORMAT = 'd.m.Y H:i'
DATE_FORMAT = 'd.m.Y'
TIME_ZONE = 'Asia/Tashkent'

LANGUAGE_CODE = 'uz'
MODELTRANSLATION_DEFAULT_LANGUAGE = 'uz'
gettext = lambda s: s
LANGUAGES = (
    ('uz', _('Uzbek')),
    ('ru', _('Russian')),

    # ('en', _('English')),
)
HTTP_ACCEPT_LANGUAGE = 'uz'

USE_I18N = True
USE_L10N = False
USE_TZ = True
LOCAL_TIMEZONE = pytz.timezone(TIME_ZONE)

AUTH_USER_MODEL = 'user.User'

AUTHENTICATION_BACKENDS = [

    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',

    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',

]

SITE_ID = 1

LOGIN_REDIRECT_URL = '/'
ACCOUNT_LOGOUT_REDIRECT_URL = '/accounts/login/'

# SESSION_COOKIE_AGE = 1*60

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',

        # 'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    # 'PAGE_SIZE': 10
}

# smtp
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD")
EMAIL_PORT = 587

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=10),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': False,
    'UPDATE_LAST_LOGIN': False,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,
    'JWK_URL': None,
    'LEEWAY': 0,

    'AUTH_HEADER_TYPES': ('Bearer',),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=60),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=10),
}

# SESSION_COOKIE_SECURE = False
# CSRF_COOKIE_SECURE = False

# LOGGING = {
#     'version': 1,
#     'disable_existing_loggers': False,
#     'filters': {
#         'require_debug_false': {
#             '()': 'django.utils.log.RequireDebugFalse'
#         }
#     },
#     'handlers': {
#         'mail_admins': {
#             'level': 'ERROR',
#             'filters': ['require_debug_false'],
#             'class': 'django.utils.log.AdminEmailHandler'
#         },
#         'applogfile': {
#             'level':'DEBUG',
#             'class':'logging.handlers.RotatingFileHandler',
#             # 'filename': os.path.join(BASE_DIR, 'debug.log'),
#             'filename': '/home/pyth/reception/debug.log',
#
#             'maxBytes': 1024*1024*15, # 15MB
#             'backupCount': 10,
#         }
#     },
#     'loggers': {
#         'django.request': {
#             'handlers': ['mail_admins'],
#             'level': 'ERROR',
#             'propagate': True,
#         },
#         'survey': {
#             'handlers': ['applogfile',],
#             'level': 'DEBUG',
#         },
#     }
# }

# import logging
#
# logging.basicConfig(
#     level=logging.INFO,
#     format='%(asctime)s %(levelname)s %(message)s',
#     filename='/home/pyth/reception/debug.log', )

TOKEN_MAX_AGE = 3600  # foydalanuvchiga berilgan tokenning umri
PHONE_MAX_AGE = 1800  # ro'yhatdan o'tish qismidagi cookiedagi raqamning umri
MINIMUM_BASE_WAGE = 270000  # eng kam bazaviy hisoblash ish xaqi 01.02.2021 holati bo'yicha

PAY_FOR_SERVICE = int(MINIMUM_BASE_WAGE / 100 * 5)  # eng kam bazaviy hisoblash ish xaqining 5% miqdori
# PAY_FOR_SERVICE = 0
PAY_FOR_SERVICE_PERCENT = int(PAY_FOR_SERVICE / 100 * 4)  # PAY_FOR_SERVICEning 4% miqdori, to'lov tizimlari foizi
# PAY_FOR_SERVICE_PERCENT = 0

SMS_LOGIN = os.getenv("SMS_LOGIN")
SMS_TOKEN = os.getenv("SMS_TOKEN")

CRONJOBS = [
    # ('0 */2 * * *', 'application.cron.application_crontab',)  #har 2 soatda cron ishga tushadi
    # ('*/1 * * * *', 'application.cron.application_crontab',)  # har 2 soatda cron ishga tushadi
    ('* * * * *', 'application.cron.application_crontab', '>> /code/deploy/logs/cron.log')  # har 2 soatda cron ishga tushadi
]

CRONTAB_COMMAND_SUFFIX = '2>&1'

PAYCOM_SETTINGS = {
    "KASSA_ID": "6180cfc7b977919a7f654016",  # token
    "TOKEN": "617bcbd3b977919a7f64c68c",  # token
    "SECRET_KEY": "MgbKhtNNoS@rOD5eqPOVJN9oJbwJN#UupyVb",  # key
    # "SECRET_KEY": "t%JPKT7BarzWuv#1Y4zNUwIVJF?Am@uaA7U%",  # test key
    "ACCOUNTS": {
        "KEY": "order_id"
    }
}

CLICK_SETTINGS = {
    'service_id': os.getenv("CLICK_SERVICE_ID"),
    'merchant_id': os.getenv("CLICK_MERCHANT_ID"),
    'secret_key': os.getenv("CLICK_SECRET_KEY"),
    'merchant_user_id': os.getenv("CLICK_MERCHANT_USER_ID"),
}

PAYMENT_HOST = '81.177.139.231:443'
PAYMENT_USES_SSL = True  # set the True value if you are using the SSL
PAYMENT_MODEL = 'user.Payment'

# import sentry_sdk
# from sentry_sdk.integrations.django import DjangoIntegration
#
# sentry_sdk.init(
#     dsn="https://5a04cc3b80bf465ba822bc1cbab24b9c@o732152.ingest.sentry.io/5787270",
#     integrations=[DjangoIntegration()],
#
#     # Set traces_sample_rate to 1.0 to capture 100%
#     # of transactions for performance monitoring.
#     # We recommend adjusting this value in production.
#     traces_sample_rate=1.0,
#
#     # If you wish to associate users to errors (assuming you are using
#     # django.contrib.auth) you may enable sending PII data.
#     send_default_pii=True
# )


LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)

import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

sentry_sdk.init(
    dsn="https://5a04cc3b80bf465ba822bc1cbab24b9c@o732152.ingest.sentry.io/5787270",
    integrations=[DjangoIntegration()],

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production,
    traces_sample_rate=1.0,

    # If you wish to associate users to errors (assuming you are using
    # django.contrib.auth) you may enable sending PII data.
    send_default_pii=True,

    # By default the SDK will try to use the SENTRY_RELEASE
    # environment variable, or infer a git commit
    # SHA as release, however you may want to set
    # something more human-readable.
    # release="myapp@1.0.0",
)

CKEDITOR_UPLOAD_PATH = "uploads/"

CKEDITOR_CONFIGS = {
    'default': {
        'height': 300,
        'width': '100%',
        'toolbar': 'full',
    }
}

CORS_ORIGIN_ALLOW_ALL = True
CORS_ORIGIN_WHITELIST = (
    'http://localhost:8080',
    'https://6fe5-213-230-80-60.ngrok.io',
    'https://e-rib.uz',
    'http://e-rib.uz',
)
