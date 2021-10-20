"""
Django settings for reception project.

Generated by 'django-admin startproject' using Django 3.0.8.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""
from datetime import timedelta

import requests

try:
    from .local_settings import *
except ImportError:
    from .prod_settings import *

import os
import pytz

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Application definition

INSTALLED_APPS = [
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
    'modeltranslation',
    'reception',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    # 'solid_i18n-1.4.2.dist-info.',
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
        'DIRS': [os.path.join(BASE_DIR, 'templates')]
        ,
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

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases


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


DATETIME_FORMAT = '%d.%m.%Y %H:%M:%S'
DATE_FORMAT = '%d.%m.%Y'
TIME_ZONE = 'Asia/Tashkent'
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

DATE_INPUT_FORMATS = ['%d.%m.%Y']

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',

        # 'rest_framework.authentication.SessionAuthentication',
    ),
    # 'DEFAULT_FILTER_BACKENDS': (
    #     'django_filters.rest_framework.DjangoFilterBackend',
    # ),
}

# smtp
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'yakubov9791999@gmail.com'
EMAIL_HOST_PASSWORD = 'yakubov9791999'
EMAIL_PORT = 587

DJOSER = {
    'PASSWORD_RESET_CONFIRM_URL': '#/password/reset/confirm/{uid}/{token}',
    'USERNAME_RESET_CONFIRM_URL': '#/username/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL': '#/activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL': True,
    'SERIALIZERS': {},
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,

    'AUTH_HEADER_TYPES': ('JWT',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
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

SMS_LOGIN = 'jj39k'
SMS_TOKEN = 'cb547db5ce188f49c1e1790c25ca6184'

CRONJOBS = [
    # ('0 */2 * * *', 'application.cron.application_crontab',)  #har 2 soatda cron ishga tushadi
    ('*/1 * * * *', 'application.cron.application_crontab',)  # har 2 soatda cron ishga tushadi
]

PAYCOM_SETTINGS = {
    "KASSA_ID": "602a69da2f3eb10fc98597ee",  # token
    "TOKEN": "602a69da2f3eb10fc98597ee",  # token
    "SECRET_KEY": "eszJcF0D4tq80SQE2NSMS?o6HZXV0oN9vkuK",  # key
    # "SECRET_KEY": "dZp&k%s@Qm72ADXHdbK4EWnRrEf&R@xmnUvk",  # test key
    "ACCOUNTS": {
        "KEY": "order"
    }
}

CLICK_SETTINGS = {
    'service_id': 17367,
    'merchant_id': 12584,
    'secret_key': 'tVhBORlLRo8AN',
    'merchant_user_id': 18969,
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
LANGUAGE_CODE = 'uz'
USE_I18N = True

USE_L10N = True

USE_TZ = True
gettext = lambda s: s
LANGUAGES = (
    ('uz', gettext('Uzbek')),
    ('ru', gettext('Russian')),
    # ('cy', gettext('Kiril')),
    ('en', gettext('English')),
)
MODELTRANSLATION_DEFAULT_LANGUAGE = 'uz'

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)
