import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="slwc_fork",
    version="0.8.12",
    author="Joe Rosa",
    author_email="joe.rosa@itpmngt.co.uk",
    license="MIT",
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
    ],
    description="Wrapper for TradingView lightweight-charts using ntf fork",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/siristone950/slwc_fork",
    packages=['slwc_fork'],
    package_data={
        'slwc_fork': ['frontend/build/*','frontend/build/static/js/*'],
    },
    include_package_data=True,
    python_requires=">=3.6",
    install_requires=[
        "streamlit >= 0.62",
    ],
)
